let userStatus = "Teacher";
switch (userStatus) {
    case "Admin":
        console.log("FullAccess")
        break;
    case "Teacher":
        console.log("Access to Course")
        break;
    case "Student":
        console.log("ReadOnly")
        break;
    default:
        console.log("NO ACCESS")
        break;
}