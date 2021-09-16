/*

    DB Structure

    {
        name,
        phone
    }

*/
const fs = require("fs/promises");
const path = require("path");

async function getData(__dirname) {
  try {
    await fs.readFile(path.join(__dirname, "db.json"), {
      encoding: "utf8",
    });
  } catch (e) {
    await fs.writeFile(
      path.join(__dirname, "db.json"),
      JSON.stringify({ users: [] })
    );
  } finally {
    let response = await fs.readFile(path.join(__dirname, "db.json"), {
      encoding: "utf8",
    });
    response = await JSON.parse(response);
    return response;
  }
}

async function addUser(name, phone, db, __dirname) {
  let newUser = {
    name,
    phone,
  };

  db.users.push(newUser);

  await fs.writeFile(path.join(__dirname, "db.json"), JSON.stringify(db));
}

module.exports = { getData, addUser };
