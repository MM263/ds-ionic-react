import * as React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonText,
  IonChip,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { Page } from "../../components/Page";
import { useExpenses } from "../../state/expenses/hooks";

export const List = () => {
  const expenses = useExpenses();

  return (
    <Page title="💎 Expenses 💎">
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <IonFabButton color="primary" routerLink="/add">
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
      {expenses.map((expense, i) => (
        <IonCard key={`expense-${i}`}>
          <IonCardHeader>
            <IonCardSubtitle>
              {formatDate(new Date(expense.date))}
            </IonCardSubtitle>
            <IonCardTitle>
              {expense.name} - ${expense.cost}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent
            style={{
              display: "inline-flex",
              flexDirection: "column",
            }}
          >
            {expense.notes && <IonText>{expense.notes}</IonText>}
            <IonChip style={{ margin: 0, marginTop: 10 }}>
              {expense.category}
            </IonChip>
          </IonCardContent>
        </IonCard>
      ))}
    </Page>
  );
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};
