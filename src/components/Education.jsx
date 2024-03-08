import { useContext, useState } from "react";
import { context } from "../context/Context";
export default function Education() {
  const [modal, setModal] = useState(false);
  function show() {
    setModal(!modal);
  }

  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    from: "",
    to: "",
  });

  const { setStoreEducation } = useContext(context);

  function renderEducation() {
    setEducation({ institution: "", degree: "", from: "", to: "" });
    setStoreEducation({ ...education });
  }

  return (
    <>
      <div className="education">
        <div>
          <h3>Education</h3>
          <button className="add" onClick={show}>
            {modal ? "-" : "+"}
          </button>
        </div>
        {modal && (
          <div className="modal">
            <div>
              <label htmlFor="institution">Institution</label>
              <br></br>
              <input
                value={education.institution}
                type="text"
                placeholder="Faculty Name"
                onChange={(e) =>
                  setEducation({ ...education, institution: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="degree">Degree</label>
              <br></br>
              <input
                value={education.degree}
                type="text"
                placeholder="Bachelor in Computer Science"
                onChange={(e) =>
                  setEducation({ ...education, degree: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="">From</label>
              <br></br>
              <input
                value={education.from}
                type="text"
                placeholder="08-2020"
                onChange={(e) =>
                  setEducation({ ...education, from: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="">To</label>
              <br></br>
              <input
                value={education.to}
                type="text"
                placeholder="04-2024"
                onChange={(e) =>
                  setEducation({ ...education, to: e.target.value })
                }
              />
            </div>
          </div>
        )}
        {modal && (
          <button className="submit" onClick={renderEducation}>
            Add Education
          </button>
        )}
      </div>
    </>
  );
}
