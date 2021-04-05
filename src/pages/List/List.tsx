import * as React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonText,
  IonChip,
} from "@ionic/react";
import { Page } from "../../components/Page";
import { useExpenses } from "../../state/expenses/hooks";

export const List = () => {
  const expenses = useExpenses();
  return (
    <Page title="💎 Expenses 💎">
      {expenses.map((expense) => (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{formatDate(expense.date)}</IonCardSubtitle>
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
