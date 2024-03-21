import React, { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // function handleNameChange(value) {
  //   setName((c) => (c = value));
  // }
  // function handleImageChange(value) {
  //   setImage((c) => (c = value));
  // }
  // removed in favor of inline functions for simple case

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    let newId = crypto.randomUUID();
    let newImage = image + "?=" + name;

    const newFriend = {
      name,
      image: newImage,
      balance: 0,
      id: newId,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
