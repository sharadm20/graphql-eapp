export default `
  type Lab {
    _id: ID!
    college: String
      latitude: String
      longitude: String
  }

  type Query {
    lab(_id: ID!): [Lab!]!
    labs: [Lab!]!
  }

  type Mutation {
    createLab(lab: CreateLabInput!): Lab!
    
    deleteLab(_id: ID!): Lab!
  }



  input CreateLabInput {
    college: String!
    latitude: String!
    longitude: String!
  }
  
`;
