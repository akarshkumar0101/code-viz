const fs = require("fs");
const acorn = require("acorn");
const walk = require("acorn-walk")

sourceFile = "./main.js"
program = acorn.parse(fs.readFileSync(sourceFile, "utf-8"),
                      {ecmaVersion: 2020, directSourceFile: sourceFile})
sourceFile = "./a.js"
program = acorn.parse(fs.readFileSync(sourceFile, "utf-8"),
                      {ecmaVersion: 2020, directSourceFile: sourceFile, program:program})
sourceFile = "./b.js"
program = acorn.parse(fs.readFileSync(sourceFile, "utf-8"),
                      {ecmaVersion: 2020, directSourceFile: sourceFile, program:program})

// console.log(program)

walk.simple(program, {
  Literal(node) {
    // console.log(`Found a literal: ${node.value}`)
  },
  Identifier(node) {
    // console.log(`Iden: ${node.name}`)
  },
  FunctionDeclaration(node){
    console.log(`FunctionDec: ${node.name}`)
  },
  ClassDeclaration(node){
    console.log(`ClassDec: ${node.name}`)
  },
  VariableDeclaration(node){
    console.log(`VarDec: ${node['declarations'][0]['id']['name']}`)
    console.log(node['declarations'][0]['init'])
  }
})
console.log(program)

fs.writeFile("jsobject.json", JSON.stringify(program), function(err) {
    if (err) {
        console.log(err);
    }
});
// console.log(program['body'][1]['declarations'])