public class Block{

    private String prevHash;
    private String[] transactions;

    public Block(String prevHash, String[] transactions) {
        this.prevHash = prevHash;
        this.transactions = transactions;

        Object[] hashValue = Object.hashCode(prevHash, transactions);
    }    

    public static void main(final String [] args){
           
        
    }

}