"use client";
import { ArrowBigDownDashIcon } from "lucide-react";
import { useState } from "react";

const Download = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadFile = async () => {
    try {
      setDownloading(true);

      // Fetch the file from the public assets directory
      const response = await fetch("/assets/manik-2.pdf");
      const blob = await response.blob();

      // Create a local URL for the fetched blob
      const url = window.URL.createObjectURL(blob);

      // Store the file in local storage (as a base64 string or blob URL)
      localStorage.setItem("downloadedCV", url);

      // Programmatically create an anchor element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = "manik-2.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(false);
    } catch (error) {
      console.error("Download failed", error);
      setDownloading(false);
    }
  };
  return (
    <button
      onClick={downloadFile}
      className="absolute bg-[#00BBA6] flex px-3 py-1 rounded-md top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      disabled={downloading}
    >
      {downloading ? "Downloading..." : "Download CV"}{" "}
      <ArrowBigDownDashIcon/>
    </button>
  );
};

export default Download;
