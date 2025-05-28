import React from "react";
import { StyleSheet, ActivityIndicator, Modal, View } from "react-native";

export interface Props {
  visible: boolean;
  onDismiss: () => void;
}

const IsLoadingComponent = (prop: Props) => {
    const {visible, onDismiss} = prop;
  return (
    <Modal visible={visible} style={[styles.modal]} transparent>
      <View style={styles.modal}>
        <ActivityIndicator color="white" size={'large'} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export default IsLoadingComponent;