import UserDisplay from "./components/UserDisplay";
import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generated";

function App() {
	const [results] = useQuery({
		query: GetUsersDocument,
	});

	return (
		<div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12">
			{results.data?.users.map((user, index) => (
				<UserDisplay user={user} key={index} />
			))}
		</div>
	);
}

export default App;
