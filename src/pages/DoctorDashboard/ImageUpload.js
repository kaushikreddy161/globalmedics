// ImageUpload.js

import React from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

const ImageUpload = () => {
  const uploadImage = async (file) => {
    //const AZURE_STORAGE_CONNECTION_STRING = 'DefaultEndpointsProtocol=https;AccountName=audioconversationstorage;AccountKey=ZMI/hWvqIfGx4eU5+pC0nMogJd+flZ36fS67ab6SREPoDVCvTN8rgrEj1HGqtQWchs9hRS/QCOCH+AStICh4mA==;EndpointSuffix=core.windows.netsp=r&st=2024-04-23T05:51:39Z&se=2025-04-23T13:51:39Z&sv=2022-11-02&sr=c&sig=TqqHvkKPqvZ3ZDScxMomjh4yEvz%2FIjhcycVIt%2F4JR8o%3D';
    
    // Log the connection string for debugging
   // console.log('Azure Storage Connection String:', AZURE_STORAGE_CONNECTION_STRING);
    const account = "audioconversationstorage";
    const sas = "sp=r&st=2024-04-23T05:51:39Z&se=2025-04-23T13:51:39Z&sv=2022-11-02&sr=c&sig=TqqHvkKPqvZ3ZDScxMomjh4yEvz%2FIjhcycVIt%2F4JR8o%3D";
    const containerName = 'doctor-consultaion'; 
   // 'https://audioconversationstorage.blob.core.windows.net/?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2025-04-24T12:30:06Z&st=2024-04-24T04:30:06Z&spr=https,http&sig=t25vefzdIpWFPfGJmF%2B%2Fqgp5H6lyI6DvwdRNwAdskf8%3D
    //'sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2025-04-24T12:30:06Z&st=2024-04-24T04:30:06Z&spr=https,http&sig=t25vefzdIpWFPfGJmF%2B%2Fqgp5H6lyI6DvwdRNwAdskf8%3D'
    //'BlobEndpoint=https://audioconversationstorage.blob.core.windows.net/;QueueEndpoint=https://audioconversationstorage.queue.core.windows.net/;FileEndpoint=https://audioconversationstorage.file.core.windows.net/;TableEndpoint=https://audioconversationstorage.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2025-04-24T12:30:06Z&st=2024-04-24T04:30:06Z&spr=https,http&sig=t25vefzdIpWFPfGJmF%2B%2Fqgp5H6lyI6DvwdRNwAdskf8%3D'
    //const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`);
    // Create a BlobServiceClient instance
   const blobServiceClient = new BlobServiceClient('BlobEndpoint=https://audioconversationstorage.blob.core.windows.net/;QueueEndpoint=https://audioconversationstorage.queue.core.windows.net/;FileEndpoint=https://audioconversationstorage.file.core.windows.net/;TableEndpoint=https://audioconversationstorage.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2025-04-24T12:30:06Z&st=2024-04-24T04:30:06Z&spr=https,http&sig=t25vefzdIpWFPfGJmF%2B%2Fqgp5H6lyI6DvwdRNwAdskf8%3D');
   // const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    
    // Log the container name for debugging
    console.log('Container Name:', containerName);


    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobName = file.name;

    // Log the file name for debugging
    console.log('Uploading file:', blobName);

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    try {
      // Upload file to Azure Blob Storage
      await blockBlobClient.uploadData(file);

      console.log('Image uploaded successfully');
    } catch (error) {
      // Log any errors that occur during the upload process
      console.error('Error uploading image:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUpload;
