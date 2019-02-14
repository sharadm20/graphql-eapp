export default `
  type College {
    _id: ID!
    clg_code: String
      clg_name: String
      state: String
      district: String
      city: String
      pincode: Int
      address: String
      clg_type: Int
      website: String
  }

  type Query {
    college(_id: ID!): [College!]!
    colleges: [College!]!
    collegesByState(state: String!):[College!]!
  }

  type Mutation {
    createCollege(college: CreateCollegeInput!): College!
    updateCollege(_id: ID!, college: UpdateCollegeInput): College!
    deleteCollege(_id: ID!): College!
  }

  input CreateCollegeInput {
    clg_code: String!
    clg_name: String!
    state: String!
    district: String!
    city: String
    pincode: Int
    address: String
    clg_type: Int
    website: String
  }
  
  input UpdateCollegeInput {
    clg_code: String
    clg_name: String
    state: String
    district: String
    city: String
    pincode: Int
    address: String
    clg_type: Int
    website: String
  }
`;
