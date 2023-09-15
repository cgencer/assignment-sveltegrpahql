query GetUsers @cached {
  Users_aggregate(where: {id: {_eq: 2}}) {
    nodes {
      id
      avatar
      birthday
      email
      firstName
      lastName
      password
      userName
      wallet
    }
  }
  CrossBindings_aggregate(where: {userID: {_eq: 2}}) {
    nodes {
      contentID
      userID
      id
      extra
      type
    }
  }
}
