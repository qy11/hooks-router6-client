//
import { useState, useEffect } from "react";
import { IPoneColor, IPoneVersion } from "../../typings";

export function useColor(
  colorGroup: IPoneColor[],
  colorId: number
): IPoneColor {
  const [currentColor, setCurrentColor] = useState<IPoneColor>(
    colorGroup[colorId]
  );
  useEffect(() => {
    const _currentColor = colorGroup.find((color) => color.cid === colorId);
    if (_currentColor) {
      setCurrentColor(_currentColor);
    }
  }, [colorGroup, colorId]);
  return currentColor;
}

export function useVersion(
  versionGroup: IPoneVersion[],
  versionId: number
): IPoneVersion {
  const [currentVersion, setCurrentColor] = useState<IPoneVersion>(
    versionGroup[versionId]
  );
  useEffect(() => {
    const _currentVersion = versionGroup.find(
      (version) => version.vid === versionId
    );
    _currentVersion && setCurrentColor(_currentVersion);
  }, [versionGroup, versionId]);
  return currentVersion;
}
