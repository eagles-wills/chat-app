import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
	type Query {
		hello: String!
	}
`;

const resolvers = {
	Query: {
		hello: () => "this is me trying to see this through",
	},
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`server ready at ${url}`));
