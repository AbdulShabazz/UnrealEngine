/* 

AUTHOR
    Seagat2011 (https://github.com/Seagat2011)
    AbdulShabazz (https://github.com/AbdulShabazz)

DESCRIPTION
    C++ Join threads, for completion, after spawning.

*/
std::map<std::chrono::sysdays, Coord> locs ; 
.
.
.
for(...)
{
    // declare a Map of locs
    locs.emplace(d,Coord{})
}
// Declare a scope //
{
    std::vector<std::jthread> tasks ;
    for(int i = 0 ; i < 5 ; i++)
    {
        tasks.push_back
        (
            std::jthread
            {
                [&locs] (std::stop_token st)
                {
                    while(!st.stop_requested())
                    {
                        for(auto& [k, c] : locs)
                        {
                            // Memory corruption, due to multiple concurrent thread access
                            // c.x++ , c.y++ , c.z++ ;  s
                            // Create an Atomic thread, which cannot be shared during Read / Write
                            std::atomic_ref<Coord> ac(c) ; // ac.load()
                            Coord tmp = ac ;
                            tmp.x++ , tmp.y++ , tmp.z++ ;
                            ac = tmp ; // ac.store(tmp)
                        } // end loop
                    }
                }
            }
        ) // end tasks
    }
    for(auto &t : tasks)
    {
        t.request_stop() ;
    }
} // stop_token generated 