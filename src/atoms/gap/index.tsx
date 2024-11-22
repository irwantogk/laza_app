import { View } from "react-native";

export default function Gap({
  sizeX,
  sizeY,
}: {
  sizeX: number;
  sizeY: number;
}) {
  return (
    <View
      style={{
        marginHorizontal: sizeX > 0 ? sizeX : 0,
        marginVertical: sizeY > 0 ? sizeY : 0,
      }}
    />
  );
}
