import React from "react";
import { Friend } from "./Friend";

export function FriendList({ friends, onSelectFriend, selectedFriend }) {
  return (
    <React.Fragment>
      <ul className="">
        {friends.map((f) => (
          <Friend
            friend={f}
            key={f.id}
            isSelected={f.id === selectedFriend?.id}
            onSelectFriend={onSelectFriend}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}
