package memory;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MemoryGameGUI extends JFrame {
    private static final int SIZE = 4; // Size of the board (4x4)
    private JButton[][] buttons;
    private String[][] board;
    private boolean[][] revealed;
    private String firstCard = null;
    private int firstRow = -1;
    private int firstCol = -1;
    private int revealedPairs = 0;

    public MemoryGameGUI() {
        setTitle("Memory Game");
        setSize(400, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(SIZE, SIZE));

        buttons = new JButton[SIZE][SIZE];
        board = new String[SIZE][SIZE];
        revealed = new boolean[SIZE][SIZE];

        setupBoard();
        createButtons();

        setVisible(true);
    }

    // Set up the memory board with pairs of numbers
    private void setupBoard() {
        List<String> cards = new ArrayList<>();

        // Add pairs of cards (using numbers as card values)
        for (int i = 1; i <= (SIZE * SIZE) / 2; i++) {
            cards.add(String.valueOf(i));
            cards.add(String.valueOf(i));
        }

        // Shuffle the cards
        Collections.shuffle(cards);

        // Fill the board with shuffled cards
        int index = 0;
        for (int row = 0; row < SIZE; row++) {
            for (int col = 0; col < SIZE; col++) {
                board[row][col] = cards.get(index++);
                revealed[row][col] = false; // All cards are hidden initially
            }
        }
    }

    // Create the buttons and add listeners
    private void createButtons() {
        for (int row = 0; row < SIZE; row++) {
            for (int col = 0; col < SIZE; col++) {
                buttons[row][col] = new JButton("*");
                buttons[row][col].setFont(new Font("Arial", Font.PLAIN, 30));
                buttons[row][col].setFocusPainted(false);
                buttons[row][col].addActionListener(new CardButtonListener(row, col));
                add(buttons[row][col]);
            }
        }
    }

    // Action listener for each card button
    private class CardButtonListener implements ActionListener {
        private int row, col;

        public CardButtonListener(int row, int col) {
            this.row = row;
            this.col = col;
        }

        @Override
        public void actionPerformed(ActionEvent e) {
            // Ensure that the card has not already been revealed
            if (revealed[row][col]) return;

            // Reveal the card
            buttons[row][col].setText(board[row][col]);
            revealed[row][col] = true;

            // Handle the first card selection
            if (firstCard == null) {
                firstCard = board[row][col];
                firstRow = row;
                firstCol = col;
            } else {
                // Handle the second card selection and check for match
                if (firstCard.equals(board[row][col])) {
                    revealedPairs++;
                    if (revealedPairs == (SIZE * SIZE) / 2) {
                        JOptionPane.showMessageDialog(MemoryGameGUI.this, "Congratulations! You've matched all the cards!");
                        restartGame(); // Restart the game when all pairs are matched
                    }
                } else {
                    // If cards don't match, flip them back after a small delay
                    Timer timer = new Timer(500, new ActionListener() {
                        @Override
                        public void actionPerformed(ActionEvent e) {
                            // Flip both cards back to *
                            if (firstRow != -1 && firstCol != -1) { // Check if the indices are valid
                                buttons[firstRow][firstCol].setText("*");
                                revealed[firstRow][firstCol] = false;
                            }
                            buttons[row][col].setText("*");
                            revealed[row][col] = false;
                        }
                    });
                    timer.setRepeats(false);
                    timer.start();
                }

                // Reset for the next turn after mismatch
                firstCard = null;
                firstRow = -1;
                firstCol = -1;
            }
        }
    }

    // Restart the game
    private void restartGame() {
        // Reset game variables
        revealedPairs = 0;
        firstCard = null;
        firstRow = -1;
        firstCol = -1;

        // Reset the board and buttons
        setupBoard();
        for (int row = 0; row < SIZE; row++) {
            for (int col = 0; col < SIZE; col++) {
                buttons[row][col].setText("*");
                revealed[row][col] = false;
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new MemoryGameGUI();
            }
        });
    }
}

