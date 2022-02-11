import React, { FC, ReactElement } from "react";
import { IPoneVersion } from "../../../typings";

interface IProps {
  versionId: number;
  version: IPoneVersion[];
  setVersionId: (id: number) => void;
}
const VersionGroup: FC<IProps> = ({
  versionId,
  version,
  setVersionId,
}): ReactElement => {
  return (
    <div>
      <h2>颜色选择：</h2>
      {version.map((v: IPoneVersion) => (
        <button
          key={v.vid}
          onClick={() => setVersionId(v.vid)}
          className={["radio-btn", v.vid === versionId ? "current" : ""].join(
            " "
          )}
        >
          {v.title}
        </button>
      ))}
    </div>
  );
};

export default VersionGroup;
