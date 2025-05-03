import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Typography,
  Paper,
  Container,
  AppBar,
  Toolbar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import excelUploadImage from "../assets/excel-upload-image.webp"; // adjust path as needed

export const UploadPage = () => {
  const [statusCode, setStatusCode] = useState("201");
  const [previewName, setPreviewName] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setPreviewName(file.name);

        const formData = new FormData();
        formData.append("file", file);

        fetch(`https://fakeresponder.com/?status=${statusCode}`, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            console.log("Upload response:", response);
          })
          .catch((error) => {
            console.error("Upload error:", error);
          });
      }
    },
    [statusCode]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
    multiple: false,
  });

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          Upload Pharmacy Group Artifacts
        </Typography>

        {/* Upload Image */}
        <Box textAlign="center" my={3}>
          <img
            src={excelUploadImage}
            alt="Excel Upload"
            style={{ maxWidth: "150px", width: "100%", height: "auto" }}
          />
        </Box>

        {/* Upload Dropzone */}
        <Paper
          {...getRootProps()}
          elevation={4}
          sx={{
            padding: 5,
            textAlign: "center",
            border: "2px dashed #aaa",
            backgroundColor: isDragActive ? "#e3f2fd" : "#fafafa",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          <input {...getInputProps()} />
          <CloudUploadIcon sx={{ fontSize: 48, color: "#1976d2", mb: 2 }} />
          <Typography variant="body1">
            {isDragActive
              ? "Drop the Excel file here..."
              : "Drag & drop an Excel (.xlsx) file here, or click to select"}
          </Typography>
        </Paper>

        {/* Preview File Name */}
        {previewName && (
          <Box mt={2}>
            <Typography variant="subtitle1">Selected File: {previewName}</Typography>
          </Box>
        )}
      </Container>
    </>
  );
};
