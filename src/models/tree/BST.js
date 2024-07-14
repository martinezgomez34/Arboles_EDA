import  Node  from "./Node.js"
class BST{
    #root

    constructor(){
        this.#root = null
    }
    add(value){
        if (this.#root == null){
            this.#root = new Node(value)
            if (this.#root != null ) return true
        }else
        return this.inserNode(this.#root,value)
    }
    inserNode(node,value){
        if(value.name < node.value.name){
            if(node.left == null){
                node.left = new Node(value)
                if(node.left != null) return true
            }else
            return this.inserNode(node.left,value)
        } else {
            if(node.right == null){
                node.right = new Node(value)
                if(node.right != null) return true
            }else
            return this.inserNode(node.right,value)
        }
    }
    search(name){
        return this.searchNode(this.#root,name)
    }

    searchNode(node,name){
        if(node == null || node.value.name === name)
            return node
        else if(name < node.value.name)
            return this.searchNode(node.left, name)
        else
        return this.searchNode(node.right, name)
    }

    min(){
        return this.minNode(this.#root);
    }

    minNode(node){
        if(node==null || node.left==null)
            return node
        else 
        return this.minNode(node.left)
    }
    
    max(){
        return this.maxNode(this.#root);
    }
    
    maxNode(node){
        if(node==null || node.right==null)
            return node
        else
            return this.maxNode(node.right)
    }
    
    impresion(callback) {
        this.inOrderTraversal(this.#root, callback);
    }

    inOrderTraversal(node, callback) {
        if (node === null) {
            return
        }else{
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }
}

export default BST