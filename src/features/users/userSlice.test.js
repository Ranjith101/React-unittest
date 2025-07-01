import userReducer, { addUser, updateUser, deleteUser } from "./userSlice";

test("should return the initial state", () => {
  expect(userReducer(undefined, {})).toHaveLength(2);
});

test("should add a user", () => {
  const previousState = [];
  const action = addUser("Test User", "test@example.com");
  const newState = userReducer(previousState, action);
  expect(newState).toHaveLength(1);
  expect(newState[0].name).toBe("Test User");
});

test("should delete a user", () => {
  const previousState = [{ id: "1", name: "Test", email: "test@test.com" }];
  const newState = userReducer(previousState, deleteUser("1"));
  expect(newState).toHaveLength(0);
});
