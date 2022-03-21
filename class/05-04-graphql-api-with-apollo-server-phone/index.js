import {ApolloServer, gql} from 'apollo-server'
import {checkValidationPhone, getToken,sendToken} from './phone.js'

// The GraphQL schema
const typeDefs = gql`
  input CreateBoardInput{
    writer:String
    title:String
    contents:String
  }

  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents:String
  }

  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미
    fetchBoards: [BoardReturn] # 배열 안에 객체 1개 이상을 의미
  }

  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(createBoardInput: CreateBoardInput): String
    createTokenOfPhone(myphone: String): String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: ()=> {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        {number: 1, writer: "철수", title: "1제목입니다!!~~", contents: "1내용입니다"},
        {number: 2, writer: "진희", title: "2제목입니다!!~~", contents: "2내용입니다"},
        {number: 3, writer: "홍석", title: "3제목입니다!!~~", contents: "3내용입니다"},
      ]
      // 2. 꺼내온 결과 응답 주기
      return result
    }

  },

  Mutation: {
    createBoard: (_, args) => {
      //1.데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      console.log(args)

      //2.저장결과 알려주기!
      return "등록에 성공하였습니다"
    },

    createBoard2: (_, args) => {
      //1.데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      console.log(args)

      //2.저장결과 알려주기!
      return "등록에 성공하였습니다"
    },

    createTokenOfPhone: (_, args) => {
      // 1.핸드폰 번호를 제대로 입력했나?
      const isValid = checkValidationPhone(args.myphone)
      if(isValid) {
      // 2. 핸드폰 토큰 6자리 만들기
          const myToken = getToken()
      // 3.핸드폰에 토큰 보내주기
          sendToken(args.myphone,myToken)
          return "인증완료"
      }  
    }
    
  }
};



//서버
const server = new ApolloServer({
  typeDefs, //shorthand property 
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});