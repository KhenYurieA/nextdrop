public class Product {
    private Long id;
    private String name;
    private double price;

    // Getters and Setters
}import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @GetMapping
    public String getProducts() {
        return "Dropshipping Products";
    }

    @PostMapping
    public String addProduct() {
        return "Product Added";
    }
}
fetch("http://localhost:8080/cart", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        productName: "Shoes"
    })
});