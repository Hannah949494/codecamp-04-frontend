// console.log("Hello World!!!!") 바보바보바보
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

const typeDefs = gql`
  input CreateBoardInput {
    writer: String!
    title: String!
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }
  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      //게시물 데이터 꺼내기
      const result = await Board.find({ where: { deletedAt: null } });
      console.log(result);
      return result;
    },
  },
  Mutation: {
    // loginCheck : (parent : any, args: any) => {

    // },

    deleteBoard: (_: any, args: any) => {
      Board.update(
        { number: args.number },
        {
          deletedAt: new Date(),
        }
      );
      return "게시글이 삭제되었습니다.";
    },

    createBoard: async (_: any, args: any) => {
      //게시물 데이터 등록

      // 1st way

      // await Board.insert({
      //   number: 1,
      //   title: "test",
      //   writer: "바보",
      //   age: 18,
      // });

      // 2nd way

      // await Board.insert({
      //   number: args.number,
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      //3rd way

      // await Board.insert({
      //   number: args.number,
      //   title: args.createBoardInput.title,
      //   writer: args.createBoardInput.writer,
      //   age: args.createBoardInput.age,
      // });

      await Board.insert({
        ...args.createBoardInput,
      });

      return "게시물 등록이 완료되었습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3314,
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 연결 성공시 실행

    console.log("연결 완료");
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    //연결 실패시 실행
    console.log(error);
  });
