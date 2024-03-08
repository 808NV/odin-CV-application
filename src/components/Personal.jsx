import { useContext, useState } from "react";
import { context } from "../context/Context";
export default function Personal() {
  const [personal, setPersonal] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
  });
  const { setStorePersonal } = useContext(context);

  function renderPersonal() {
    setPersonal({ name: "", address: "", email: "", number: "" });
    setStorePersonal({ ...personal });
  }
  return (
    <div className="personal">
      <h3>Personal Information</h3>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={personal.name}
          onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="Address">Address</label>
        <input
          type="text"
          placeholder="Enter your Location"
          value={personal.address}
          onChange={(e) =>
            setPersonal({ ...personal, address: e.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          value={personal.email}
          onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="name">Phone Number</label>
        <input
          type="text"
          placeholder="Your Phone Number"
          value={personal.number}
          onChange={(e) => setPersonal({ ...personal, number: e.target.value })}
        />
      </div>
      <button className="submit" onClick={renderPersonal}>
        conform
      </button>
    </div>
  );
}
