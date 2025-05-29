import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import TaskManager from "./components/task-manager";
import { supabase } from "./supabase-client";

function App() {
  const [session, setSession] = useState<any>(null);

  // fetchSession
  const fetchSession = async () => {
    // listener that is going to be listening to any state changes to the user's 
    // authentication status. First get current session and if there is a session available, 
    // create a variable called session.
    const currentSession = await supabase.auth.getSession();
    console.log(currentSession);
    setSession(currentSession.data.session);
  };

  // useEffect
  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // logout
  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      {session ? ( // If session is not Null display Task Manager else display Auth.
        <>
          <button onClick={logout}> Log Out</button>
          <TaskManager session={session} />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;