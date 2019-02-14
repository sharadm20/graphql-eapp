export default `
  type State {
    _id: ID!
    name: String,
    abbvr: String
  }

  type Query {
    states: [State!]!
  }

`;
