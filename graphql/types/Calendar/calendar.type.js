export default `
scalar Date
  type Calendar {
    _id: ID!
   event: String
     date: Date
  }

  type Query {
    calendar(_id: ID!): [Calendar!]!
    calendars: [Calendar!]!
  }

  type Mutation {
    createCalendar(calendar: CreateCalendarInput!): Calendar!
    updateCalendar(_id: ID!, calendar: UpdateCalendarInput): Calendar!
    deleteCalendar(_id: ID!): Calendar!
  }

  
  input CreateCalendarInput {
   event: String!
   date: Date!
  }
  
  input UpdateCalendarInput {
     event: String
     date: Date!
  }
`;
