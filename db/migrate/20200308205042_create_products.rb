class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string 'type', null: false
      t.string 'name', null: false
      t.string 'description', null: false
      t.string 'size', null: false
      t.string 'details', null: false
      t.float 'price', null: false
      t.timestamps
    end
  end
end
