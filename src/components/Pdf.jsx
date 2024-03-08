/*import { useContext } from "react";
import { context } from "../context/Context";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function Pdf() {
  const { storeEducation, storeExperience, storePersonal } =
    useContext(context);

  return (
    <div>
      <PDFViewer width={600} height={600}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Name: {storePersonal.name}</Text>
            </View>
            <View style={styles.section}>
              <Text>Address:{storePersonal.address}</Text>
            </View>
            <View style={styles.section}>
              <Text>Email: {storePersonal.email}</Text>
            </View>
            <View style={styles.section}>
              <Text>Number: {storePersonal.number}</Text>
            </View>
            <View style={styles.section}>
              <Text>Education:</Text>
            </View>
            <View style={styles.section}>
              <Text>
                From: {storeEducation.from} <br /> To {storeEducation.to}
              </Text>
            </View>
            <View style={styles.section}>
              <Text>
                From: {storeEducation.from} <br /> To {storeEducation.to}
              </Text>
            </View>
            <View style={styles.section}>
              <Text>
                <strong>{storeEducation.institution}</strong>
              </Text>
            </View>
            <View style={styles.section}>
              <Text>{storeEducation.degree}</Text>
            </View>
            <View style={styles.section}>
              <Text>Experience:</Text>
            </View>
            <View style={styles.section}>
              <Text>
                From: {storeExperience.from} <br /> To {storeExperience.to}
              </Text>
            </View>
            <View style={styles.section}>
              <Text>
                <strong>{storeExperience.title}</strong>
              </Text>
            </View>
            <View style={styles.section}>
              <Text>{storeExperience.company}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <PDFDownloadLink document={<Document></Document>} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
}*/
/*import { useContext } from "react";
import { context } from "../context/Context";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default function Pdf() {
  const { storeEducation, storeExperience, storePersonal } =
    useContext(context);

  return (
    <div>
      <PDFViewer width={600} height={600}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>Name:</Text>
              <Text style={styles.content}>{storePersonal.name}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Address:</Text>
              <Text style={styles.content}>{storePersonal.address}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Email:</Text>
              <Text style={styles.content}>{storePersonal.email}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Number:</Text>
              <Text style={styles.content}>{storePersonal.number}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Education:</Text>
              <Text style={styles.content}>
                From: {storeEducation.from} To: {storeEducation.to}
              </Text>
              <Text style={styles.content}>
                <Text style={{ fontWeight: "bold" }}>
                  {storeEducation.institution}
                </Text>
              </Text>
              <Text style={styles.content}>{storeEducation.degree}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Experience:</Text>
              <Text style={styles.content}>
                From: {storeExperience.from} To: {storeExperience.to}
              </Text>
              <Text style={styles.content}>
                <Text style={{ fontWeight: "bold" }}>
                  {storeExperience.title}
                </Text>
              </Text>
              <Text style={styles.content}>{storeExperience.company}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <PDFDownloadLink document={<Document></Document>} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
}*/

import { useContext } from "react";
import { context } from "../context/Context";

export default function Pdf() {
  const { storeEducation, storeExperience, storePersonal } =
    useContext(context);

  return (
    <div className="pdf">
      <div className="pdf-content"></div>
      <div className="heading">
        <h2>
          {storePersonal.name && Object.keys(storePersonal.name).length > 0
            ? storePersonal.name
            : "John Doe"}
        </h2>
        <br />

        <div className="contact">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            {storePersonal.address &&
            Object.keys(storePersonal.address).length > 0
              ? storePersonal.address
              : "New York, NY"}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-at-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
            </svg>
            {storePersonal.email && Object.keys(storePersonal.email).length > 0
              ? storePersonal.email
              : "John1234@gmail.com"}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            {storePersonal.address &&
            Object.keys(storePersonal.number).length > 0
              ? storePersonal.number
              : "111-1111-111"}
          </div>
        </div>
      </div>

      <h3 className="header">Education</h3>
      <div className="edu">
        <div className="date">
          <p>
            {storeEducation.from && Object.keys(storeEducation.from).length > 0
              ? storeEducation.from
              : "02/2020"}
            -{" "}
            {storeEducation.to && Object.keys(storeEducation.to).length > 0
              ? storeEducation.to
              : "present"}
          </p>
        </div>
        <div>
          <p>
            <strong>
              {storeEducation.institution &&
              Object.keys(storeEducation.institution).length > 0
                ? storeEducation.institution
                : "Cornell University"}
            </strong>
          </p>
          <p>
            {storeEducation.degree &&
            Object.keys(storeEducation.degree).length > 0
              ? storeEducation.degree
              : "Bachelor of Computer Science"}
          </p>
        </div>
      </div>

      <h3 className="header">Experience</h3>
      <div className="exp">
        <div className="date">
          <p>
            {storeExperience.from &&
            Object.keys(storeExperience.from).length > 0
              ? storeExperience.from
              : "02/2023"}
            -{" "}
            {storeExperience.to && Object.keys(storeExperience.to).length > 0
              ? storeExperience.to
              : "08/2023"}
          </p>
        </div>
        <div>
          <p>
            <strong>
              {storeExperience.title &&
              Object.keys(storeExperience.title).length > 0
                ? storeExperience.title
                : "Web Developer"}
            </strong>
          </p>
          <p>
            {storeExperience.company &&
            Object.keys(storeExperience.company).length > 0
              ? storeExperience.company
              : "google"}
          </p>
        </div>
      </div>
    </div>
  );
}
