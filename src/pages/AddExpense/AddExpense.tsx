import * as React from "react";
import { Page } from "../../components/Page";
import {
  IonInput,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { useAppDispatch } from "../../store";
import { add } from "../../state/expenses/reducer";
import { RouteComponentProps } from "react-router";

const selectOptions = [
  "Rent and utilities",
  "Food and drinks",
  "Home",
  "Transportation",
  "Personal care",
  "Entertainment",
  "Giving",
  "Software",
  "Health",
  "Fees",
  "Clothing",
  "Travel",
];

const isSubmitDisabled = (name: string, cost: number) =>
  name === "" || cost === 0;

export const AddExpense: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = React.useState("");
  const [cost, setCost] = React.useState(0);
  const [date, setDate] = React.useState(new Date().toISOString());
  const [category, setCategory] = React.useState(
    selectOptions[Math.floor(Math.random() * selectOptions.length)]
  );
  const [notes, setNotes] = React.useState("");

  return (
    <Page title="Add Expense" back>
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput
            value={name}
            onIonChange={(e) => {
              if (e.detail.value) setName(e.detail.value);
            }}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Cost</IonLabel>
          <IonInput
            value={cost}
            onIonChange={(e) => {
              if (e.detail.value) setCost(Number(e.detail.value));
            }}
            type="number"
            min="0"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Date</IonLabel>
          <IonDatetime
            value={date}
            onIonChange={(e) => {
              if (e.detail.value) setDate(e.detail.value);
            }}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Category</IonLabel>
          <IonSelect
            value={category}
            onIonChange={(e) => setCategory(e.detail.value)}
          >
            {selectOptions.map((option, i) => (
              <IonSelectOption key={`option-${i}`} value={option}>
                {option}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Notes</IonLabel>
          <IonTextarea
            value={notes}
            onIonChange={(e) => {
              if (e.detail.value) setNotes(e.detail.value);
            }}
          />
        </IonItem>
      </IonList>
      <IonButton
        disabled={isSubmitDisabled(name, cost)}
        expand="block"
        shape="round"
        style={{
          padding: "0 10px",
        }}
        onClick={() => {
          dispatch(
            add({
              name,
              category,
              date,
              cost,
              notes,
            })
          );
          history.push("/list");
        }}
      >
        Add
      </IonButton>
    </Page>
  );
};
