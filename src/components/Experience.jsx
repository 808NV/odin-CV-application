import { useContext, useState } from "react";
import { context } from "../context/Context";

export default function Experience() {
  const [modal, steModal] = useState(false);
  function show() {
    steModal(!modal);
  }

  const [experience, setExperience] = useState({
    title: "",
    company: "",
    from: "",
    to: "",
  });

  const { setStoreExperience } = useContext(context);

  function renderExperience() {
    setExperience({ title: "", company: "", from: "", to: "" });
    setStoreExperience([...experience]);
  }
  return (
    <>
      <div className="experience">
        <div>
          <h3>Experience</h3>
          <button onClick={show} className="add">
            {modal ? "-" : "+"}
          </button>
        </div>
        {modal && (
          <div className="modal">
            <div>
              <label htmlFor="Occupation">Occupation</label>
              <br></br>
              <input
                type="text"
                placeholder="Job Title"
                value={experience.title}
                onChange={(e) =>
                  setExperience({ ...experience, title: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="employer">Employer</label>
              <br></br>
              <input
                type="text"
                placeholder="Company name"
                value={experience.company}
                onChange={(e) =>
                  setExperience({ ...experience, company: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="">From</label>
              <br></br>
              <input
                type="text"
                placeholder="08-2020"
                value={experience.from}
                onChange={(e) =>
                  setExperience({ ...experience, from: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="">To</label>
              <br></br>
              <input
                type="text"
                placeholder="04-2024"
                value={experience.to}
                onChange={(e) =>
                  setExperience({ ...experience, to: e.target.value })
                }
              />
            </div>
          </div>
        )}
        {modal && (
          <button className="submit" onClick={renderExperience}>
            Add Experience
          </button>
        )}
      </div>
    </>
  );
}
