import { Flex, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import React from "react";
function Home() {
  const [userinput, setuserinput] = useState("");
  const [todolist, settodo] = useState([]);
  const handleChange = (event:string) => {
    event.preventDefault();
    setuserinput(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    settodo([userinput, ...todolist]);
    setuserinput('');
  };
  const handleDelete = (todo) => {
    const updatedtodo = todolist.filter(
      (todoitem) => todolist.indexOf(todoitem) != todolist.indexOf(todo)
    );

    settodo(updatedtodo);
  };

  return (
    <Flex
      fontFamily={"sans-serif"}
      fontSize={"20"}
      fontWeight={"normal"}
      alignItems={"center"}
      alignContent={"center"}
      flexDirection={"column"}
      height={"100vh"}
      bg={"white"}
      color={"blue"}
    >
      <Flex
        padding={"20"}
        mt={"100"}
        flexDirection={"column"}
        width={"50%"}
        textAlign={"center"}
      >
        <h1 color="bLUE"> My Todo APP</h1>
        <br />
        <Input
          value={userinput}
          onChange={handleChange}
          padding={"10"}
          placeholder="Add Todo"
          variant={"flushed"}
          fontSize={"inherit"}
        ></Input>
      </Flex>
      <Button
        margin={20}
        onClick={handleSubmit}
        height={"30px"}
        width={"70px"}
  
        colorScheme={"facebook"}
        color="WHILE"
        size="lg"
      >
        Add
      </Button>

      <ul color="red">
        {todolist.length >= 1
          ? todolist.map((todo, ind) => {
              return (
                <li key={ind}>
                  {todo}{""}
                  <Button size={'lg'}
                  pl={'10px'}
                  pr={'10px'}
                  ml={'10px'}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(todo);
                    }}
                  >
                    {" "}
                    Del
                  </Button>
                </li>
              );
            })
          : "Empty List"}
      </ul>
    </Flex>
  );
}
export default Home;
