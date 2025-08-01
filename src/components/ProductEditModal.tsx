import { useState } from "react";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Product {
  id: string;
  name: string;
  image: string;
  gmv: string;
  commission: string;
  sold: number;
}

interface ProductEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
  onSave: (product: Product) => void;
  language: 'pt' | 'en';
}

export const ProductEditModal = ({
  isOpen,
  onClose,
  product,
  onSave,
  language
}: ProductEditModalProps) => {
  const [editedProduct, setEditedProduct] = useState<Product>(
    product || {
      id: '',
      name: '',
      image: '',
      gmv: '0',
      commission: '0',
      sold: 0
    }
  );

  const texts = {
    pt: {
      editProduct: "Editar Produto",
      productName: "Nome do Produto",
      productImage: "Imagem do Produto",
      uploadImage: "Carregar Imagem",
      gmv: "GMV",
      commission: "Comissão",
      itemsSold: "Itens Vendidos",
      save: "Salvar",
      cancel: "Cancelar"
    },
    en: {
      editProduct: "Edit Product",
      productName: "Product Name",
      productImage: "Product Image",
      uploadImage: "Upload Image",
      gmv: "GMV",
      commission: "Commission",
      itemsSold: "Items Sold",
      save: "Save",
      cancel: "Cancel"
    }
  };

  const t = texts[language];

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditedProduct(prev => ({
          ...prev,
          image: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card w-full max-w-md rounded-lg p-6 tiktok-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">{t.editProduct}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">{t.productName}</Label>
            <Input
              id="name"
              value={editedProduct.name}
              onChange={(e) => setEditedProduct(prev => ({ ...prev, name: e.target.value }))}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="image">{t.productImage}</Label>
            <div className="mt-2">
              {editedProduct.image && (
                <img 
                  src={editedProduct.image} 
                  alt="Product"
                  className="w-20 h-20 rounded-lg object-cover mb-2"
                />
              )}
              <div className="flex items-center space-x-2">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById('image')?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {t.uploadImage}
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="gmv">{t.gmv}</Label>
            <Input
              id="gmv"
              value={editedProduct.gmv}
              onChange={(e) => setEditedProduct(prev => ({ ...prev, gmv: e.target.value }))}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="commission">{t.commission}</Label>
            <Input
              id="commission"
              value={editedProduct.commission}
              onChange={(e) => setEditedProduct(prev => ({ ...prev, commission: e.target.value }))}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="sold">{t.itemsSold}</Label>
            <Input
              id="sold"
              type="number"
              value={editedProduct.sold}
              onChange={(e) => setEditedProduct(prev => ({ ...prev, sold: parseInt(e.target.value) || 0 }))}
              className="mt-2"
            />
          </div>
        </div>

        <div className="flex space-x-3 mt-6">
          <Button variant="outline" onClick={onClose} className="flex-1">
            {t.cancel}
          </Button>
          <Button onClick={handleSave} className="flex-1">
            {t.save}
          </Button>
        </div>
      </div>
    </div>
  );
};