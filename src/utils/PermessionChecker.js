const isAdministrativeUser = (loginData) => {
  const user = loginData.user;
  const roles = user.roles.map((role) => role.name);
  return (
    roles.includes("ROLE_ADMIN") ||
    roles.includes("ROLE_STAFF") ||
    roles.includes("ROLE_PRINCIPAL") ||
    roles.includes("ROLE_VICE-PRINCIPAL")
  );
};

const isStudentUser = (loginData) => {
  const user = loginData.user;
  const roles = user.roles.map((role) => role.name);
  return roles.includes("ROLE_STUDENT");
};

export { isAdministrativeUser, isStudentUser };
