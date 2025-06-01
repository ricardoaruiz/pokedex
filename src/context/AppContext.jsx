import { FavoriteProvider } from "./FavoriteContext";
import { ListProvider } from "./ListContext";

export function AppContext({ children }) {
  return (
    <ListProvider>
      <FavoriteProvider>{children}</FavoriteProvider>
    </ListProvider>
  );
}
