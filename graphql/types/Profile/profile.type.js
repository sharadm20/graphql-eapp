export default `
scalar Date
scalar JSON
  type Profile {
    _id: ID!
    type: String
    contact: String
    dob: Date
    educations:[Education!]
    experiences: [Experience!]
    location: Location
  }

  type Education{
    _id:ID
    college: String
    yearOfPassing: Date
    branch: String
    degree: String
  }
  type Experience{
    _id: ID
    designation: String
    department: String
    role: String
    company: String
    joined: Date
    left: Date
  }
  type Location{
    _id:ID
    address1: String
    address2: String
    district: String
    pincode: String
    state: String
  }

  type Query {
    profile(_id: ID!): Profile!
    profiles: [Profile!]!
  }

  type Mutation {
    createProfile(profile: CreateProfileInput): Profile!
    updateProfile(_id: ID!, profile: UpdateProfileInput): Profile!
    deleteProfile(_id: ID!): Profile!
  }

  

  input CreateProfileInput {
    _id: ID!
      type: String
    contact: String
    dob: Date
    educations: JSON
    experiences: JSON
    location: JSON
  }
  
  input UpdateProfileInput {
     _id: ID!
       type: String
     contact: String
     dob: Date
     educations: JSON
     experiences: JSON
     location: JSON
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
