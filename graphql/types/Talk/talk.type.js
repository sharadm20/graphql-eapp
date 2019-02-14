export default `
scalar Date
  type Talk {
    _id: ID!
    title: String!
    description: User!
    link: String!
    date_published: Date!
  }

  type Query {
    talk(_id: ID!): [Talk!]!
    talks: [Talk!]!
  }

  type Mutation {
    createTalk(talk: CreateTalkInput!): Talk!
    updateTalk(_id: ID!, talk: UpdateTalkInput): Talk!
    deleteTalk(_id: ID!): Talk!
  }

 

  
  input CreateTalkInput {
    title: String!
    description: String!
    link: String!
    date_publisher: Date!
  }
  
  input UpdateTalkInput {
    title: String
    description: String
    link: String
    date_published : String
  }

`;
