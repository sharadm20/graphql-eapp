export default `
  type User {
    _id: String!
    name: String!
    email: String!
    userid: String!
    password: String!
    imageurl: String!
    profile: Profile!
    
  }
  type Token{
    token: String
  }

  type Query {
    me: User
  }

  type Mutation {
    signup(user: CreateUserInput): User!
    signin(user: CreateUserInput2, strat: String!): Token!
  
    
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    confirm_password: String!
    
  }
  input CreateUserInput2 {
      email: String
      idToken: String
      password: String
  }

`;
