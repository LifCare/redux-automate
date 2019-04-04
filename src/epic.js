import { of } from "rxjs/observable/of";
import { mergeMap, catchError, flatMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import actions from "./actions";

export function getUsersData(action$, store) {
  console.log("epic");
  return action$.pipe(
    ofType("PINCODE"),
    mergeMap(data => {
      console.log("api call");
      return ajax({
        url: `http://sandbox2.lifcare.in/v5/account/refill/leads/facility?scheduled-at-begins=1554273710557&size=10&facility-id=131`,
        headers: {
          "Content-Type": "application/json",

          Authorization: "Bearer 721467e9-c270-4347-8d7f-0c8a4d111cf0"
        },
        method: "GET"
      }).pipe(
        mergeMap(result => {
          return of(actions.pincodeSuccess(result.body.payload));
        }),
        catchError(error => {
          console.log("error", error);
          return of(actions.pincodeFailure(error));
        })
      );
    })
  );
}
