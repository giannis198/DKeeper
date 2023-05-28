import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor DKeeper {

  public type Note = {
    title : Text;
    content : Text;
  };

  stable var notes : List.List<Note> = List.nil<Note>();

  public func createNote(titleText : Text, contentText : Text) {

    let newNote : Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show (notes));
  };

  public query func readNotes() : async [Note] {
    return List.toArray(notes);
  };

  // Function to delete an item from a List

  public func deleteNote(id : Nat) : async () {
    
    // front list part before id
    let listFront = List.take(notes, id);
   
   // part of the list after the given id
    let listBack = List.drop(notes, id + 1 );
    
    // append the 2 new lists to main list 
    notes:= List.append(listFront, listBack);

    Debug.print(debug_show (notes));
     Debug.print(debug_show (""));
    
    

  };

};
