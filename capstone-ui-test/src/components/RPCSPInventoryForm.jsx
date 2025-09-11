import { useState } from "react";

export default function RPCSPInventoryForm({ onSave, onDiscard }) {
  /* ---------- local state ---------- */
  const [form, setForm] = useState({
    article: "",
    semiExpendable: "No",
    description: "",
    unitOfMeasure: "",
    unitValue: "",
    balancePerCard: "",
    onHandCount: "",
    shortageQty: "",
    shortageValue: "",
    remarks: "",
    location: "",
    condition: "",
    duration: "",
    startDate: "",
    endDate: "",
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  };

  const computeShortage = () => {
    const bal = Number(form.balancePerCard) || 0;
    const onHand = Number(form.onHandCount) || 0;
    const qty = bal - onHand;
    setForm((f) => ({
      ...f,
      shortageQty: qty === 0 ? "" : String(qty),
      shortageValue: qty === 0 ? "" : String(qty * (Number(f.unitValue) || 0)),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6">
        {/* header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">RPCSP Inventory Form</h2>
          <button onClick={onDiscard} className="text-gray-500 hover:text-black">&#x2715;</button>
        </div>

        {/* two-column grid */}
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
          {/* LEFT */}

          <div className="space-y-4">
            {/* picture */}
            <ImageDrop name="picture" value={form.picture} onChange={handleChange} />
            <Input label="Article" name="article" value={form.article} onChange={handleChange} />
            <Input label="Semi-Expentable Property No." name="article" value={form.article} onChange={handleChange} />
            <Textarea label="Description" name="description" value={form.description} onChange={handleChange} />
            <Input label="Unit of Measure" name="unitOfMeasure" value={form.unitOfMeasure} onChange={handleChange} />
            <Input label="Unit Value (₱)" name="unitValue" value={form.unitValue} onChange={handleChange} type="number" />
            <Input label="Balance per Card (Quantity)" name="balancePerCard" value={form.balancePerCard} onChange={handleChange} type="number" />
            <Input label="On-hand per Count (Quantity)" name="onHandCount" value={form.onHandCount} onChange={(e) => { handleChange(e); computeShortage(); }} type="number" />

          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <Input label="Shortage Overage (Quantity)" name="unitValue" value={form.unitValue} onChange={handleChange} type="number" />
            <Input label="Shortage Overage (Value)" name="unitValue" value={form.unitValue} onChange={handleChange} type="number" />
            <Textarea label="Remarks" name="remarks" value={form.remarks} onChange={handleChange} />
            <Select label="Location" name="location" value={form.location} onChange={handleChange}>
              <option value="">Select Location</option>
              <option>RDS Office</option>
              <option>Conference Room</option>
              <option>Auditor's Office</option>
              <option>Storage Room</option>
            </Select>
            <Select label="Condition" name="condition" value={form.condition} onChange={handleChange}>
              <option value="">Select Condition</option>
              <option>Servicable</option>
              <option>Decent</option>
              <option>Unusable</option>
              <option>Needs Repair</option>
            </Select>
            <Input label="Start Date" name="startDate" value={form.startDate} onChange={handleChange} type="date" />
            <Input label="End Date" name="endDate" value={form.endDate} onChange={handleChange} type="date" />
                        {/* picture */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Parse PDF</label>
              <input type="file" accept="image/*" onChange={handleChange} name="picture" className="text-sm text-gray-500 file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:bg-[#2F549A] file:text-white p-4" />
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="mt-6 flex gap-3 justify-end">
          <button onClick={onDiscard} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">DISCARD</button>
          <button onClick={() => onSave(form)} className="px-4 py-2 rounded-lg bg-[#FCFC62] text-black hover:bg-yellow-400">SAVE</button>
        </div>
      </div>
    </div>
  );
}

/* reusable tiny controls */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input {...props} className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F549A] ${props.className || ""}`} />
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select {...props} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F549A]">{children}</select>
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea {...props} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F549A]" rows={3} />
    </div>
  );
}

function ImageDrop({ name, value, onChange }) {
  const [drag, setDrag] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      onChange({ target: { name, files: [file] } });
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Add a Picture</label>
      <div
        className={`w-full h-70 border-2 border-dashed rounded-lg flex items-center justify-center text-gray-500 transition ${drag ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={handleDrop}
      >
        {value ? (
          <img src={URL.createObjectURL(value)} alt="preview" className="h-full object-contain rounded" />
        ) : (
          <span>Drop image here or click to browse</span>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onChange({ target: { name, files: e.target.files } })}
        id={`drop-${name}`}
      />
      <label htmlFor={`drop-${name}`} className="mt-2 inline-block text-sm text-blue-600 hover:underline cursor-pointer">
        Browse file…
      </label>
    </div>
  );
}