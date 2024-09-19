"use client";

import {
  ApolloProvider,
  HttpLink,
  ApolloClient,
  InMemoryCache,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import * as ActionCable from "@rails/actioncable";
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink";
import { Chat, HealthieProvider } from "@healthie/sdk";
import "@healthie/sdk/dist/styles/index.css";

export const ChatComponent = () => {
  const healthieAuthToken = process.env.NEXT_PUBLIC_HEALTHIE_AUTH_TOKEN;
  const healthieUserId = process.env.NEXT_PUBLIC_HEALTHIE_USER_ID;
  const healthieConversationId =
    process.env.NEXT_PUBLIC_HEALTHIE_CONVERSATION_ID;

  const httpLink = new HttpLink({
    uri: "https://api.gethealthie.com/graphql",
    headers: {
      authorization: `Basic ${healthieAuthToken}`,
      authorizationsource: "API",
    },
  });

  const cable = ActionCable.createConsumer(
    `wss://ws.gethealthie.com/subscriptions?token=${healthieAuthToken}`
  );
  const wsLink = new ActionCableLink({ cable });

  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      if (!("operation" in definition)) {
        return false;
      }

      const { kind, operation } = definition;
      return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // custom configuration if needed
          },
        },
      },
    }),
  });

  return (
    <ApolloProvider client={client}>
      <HealthieProvider userId={healthieUserId}>
        <Chat conversationId={healthieConversationId} />
      </HealthieProvider>
    </ApolloProvider>
  );
};
