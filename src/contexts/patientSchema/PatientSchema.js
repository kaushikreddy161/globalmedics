export const PatientSchema = {
      name: 'patientData',
      properties: {
          _id: 'objectId',
          emailId: 'string?',
          password: 'string?',
          entryDate: 'date?',
          entryStatus: 'string?',
          realm_id: 'string?', // should be userId or add any static for test project.
         
      },
      primaryKey: '_id',
  };
  
  export default PatientSchema;