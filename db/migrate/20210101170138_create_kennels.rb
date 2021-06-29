class CreateKennels < ActiveRecord::Migration[6.0]
  def change
    create_table :kennels do |t|
      t.string :kennel_type
      t.bigint :material_cost
      t.bigint :labor_cost
      t.bigint :price
      t.references :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
