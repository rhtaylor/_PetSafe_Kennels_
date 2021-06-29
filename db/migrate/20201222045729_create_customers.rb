class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.bigint :number
      t.string :email
      t.string :city

      t.timestamps
    end
  end
end
