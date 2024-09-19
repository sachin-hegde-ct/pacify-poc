import styles from "./index.module.scss";

type ToggleSwitchComponentProps = {
  prefix: string;
  suffix: string;
  onToggle: () => void;
};

export const ToggleSwitchComponent = ({
  prefix,
  suffix,
  onToggle,
}: ToggleSwitchComponentProps) => {
  return (
    <div className={`flex gap-4 items-center`}>
      <span>{prefix}</span>
      <label className={styles.toggleSwitch}>
        <input type="checkbox" onChange={onToggle} />
        <span className={styles.slider}></span>
      </label>
      <span>{suffix}</span>
    </div>
  );
};
