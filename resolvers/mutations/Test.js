exports.testMutation = {
  addUserDetails: (parent, { name, lastName, phoneNumber }) => {
    return {
      name,
      lastName,
      phoneNumber,
    };
  },
};
