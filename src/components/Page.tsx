import * as React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

interface Props {
  children: React.ReactNode;
  title: string;
  back?: boolean;
}

export const Page = ({ children, back = false, title }: Props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {back && (
            <IonButtons slot="start">
              <IonBackButton defaultHref="/list" />
            </IonButtons>
          )}
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>{children}</IonContent>
    </IonPage>
  );
};
