import { useEffect, useState } from "react";
import { getAllTickets } from "../services/TicketService";
import { Ticket } from "../components/Ticket";
import "./Tickets.css"
import { TicketFilterBar } from "../components/TicketFilterBar";
import { NavBar } from "../components/nav/NavBar";



export const TicketList = () => {
      const [allTickets, setAllTickets] = useState([]);
      const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
      const [filteredTickets, setFilteredTickets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    
      useEffect(() => {
        getAllTickets().then((ticketsArray) => {
          setAllTickets(ticketsArray);
        });
      }, []);
    
    
      useEffect(() => {
        if (showEmergencyOnly === true) {
          const emergencyTickets = allTickets.filter(
            (ticket) => ticket.emergency === true
          );
          setFilteredTickets(emergencyTickets);
        } else {
          setFilteredTickets(allTickets);
        }
      }, [showEmergencyOnly, allTickets])
    
      useEffect(() => {
  const foundTickets = allTickets.filter((ticket) => 
    ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  setFilteredTickets(foundTickets)
}, [searchTerm, allTickets])

    
      return (
        <div className="tickets-container">
          <h2>Tickets</h2>
         <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
    
    
          <article className="tickets">
            {filteredTickets.map((ticketObj) => {
              return (
                <Ticket key={ticketObj.id} ticket={ticketObj} />
              );
            })}
          </article>
        </div>
      );
    };